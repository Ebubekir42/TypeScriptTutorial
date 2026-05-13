// Basic Promise

const fetchGreeting = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success)
                resolve("Hello, Typescript!");
            reject(new Error('Failed to fetch greeting'));
        }, 1000);
    });
}

fetchGreeting()
    .then(greeting => {
        console.log(greeting.toUpperCase());
    })
    .catch((error: Error) => {
        console.error(`Error: ${error.message}`);
    });


// Basic Async/Await

interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'guest';
}

const fetchUsers = async (): Promise<User[]> => {
    console.log('Fetching users...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
        { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
        { id: 1, name: 'Bob', email: 'bob@example.com', role: 'user' }
    ];
}

const processUsers = async (): Promise<User[]> => {
    try {
        const users = await fetchUsers();
        console.log(`Fetched ${users.length} users`);

        const adminEmails = users.filter(u => u.role === 'admin').map(u => u.email);
        console.log(`Admin emails: ${adminEmails}`);
        return users;
    } catch (error) {
        if (error instanceof Error)
            console.error(`Failed to process users: ${error.message}`);
        else
            console.error('An unknown error occured');
        throw error;
    }
}

processUsers()
    .then(() => console.log('Processing complete'))
    .catch(err => console.error(`Processing failed: ${err}`));


// Parallel Execution with Promise.all

interface Product {
    id: number;
    name: string;
    price: number;
}

const fetchProduct = async (id: number): Promise<Product> => {
    console.log(`Fetching product ${id}...`);
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    return { id, name: `Product ${id}`, price: Math.floor(Math.random() * 100) };
}

const fetchMultipleProducts = async (): Promise<void> => {
    try {
        const [product1, product2, product3]: [Product, Product, Product] = await Promise.all(
            [
                fetchProduct(1),
                fetchProduct(2),
                fetchProduct(3)
            ]
        );
        const total = [product1, product2, product3].reduce((sum, product) => sum + product.price, 0);
        console.log(`Total price: $${total.toFixed(2)}`);
    } catch (error) {
        console.error(`Error fetching products: ${error}`);
    }
}

fetchMultipleProducts();


// Typing Callbacks for Async Operations

type FetchCallback = (error: Error | null, data?: string) => void;

const fetchDataWithCallBack = (url: string, callback: FetchCallback): void => {
    setTimeout(() => {
        callback(null, 'Response data');
    }, 1000);
}

fetchDataWithCallBack('https://api.example.com', (error, data) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (data)
        console.log(data.toUpperCase());
});



// Promise Combinations
// Promise.all()

const fetchUser = (id: number): Promise<{ id: number, name: string }> =>
    Promise.resolve({ id, name: `User ${id}` });

const fetchPosts = (): Promise<Array<{ id: number, title: string }>> =>
    Promise.resolve([
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' }
    ]);

const fetchStats = (userId: number): Promise<{ views: number, likes: number }> =>
    Promise.resolve({ views: 100, likes: 25 });

const loadUserDashboard = async (userId: number) => {
    try {
        const [user, posts, stats] = await Promise.all([
            fetchUser(userId),
            fetchPosts(),
            fetchStats(userId)
        ]);
        console.log(`User: ${user.name}`);
        console.log(`Posts: ${posts.length}`);
        console.log(`Likes: ${stats.likes}`);

        return { user, posts, stats };
    } catch (error) {
        console.error(`Failed to load dashboard: ${error}`);
    }
}

loadUserDashboard(1);


// Promise.race First to Settle

const timeout = (ms: number): Promise<never> =>
    new Promise((_, reject) => setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms));

const fetchWithTimeout = async <T,>(promise: Promise<T>, timeoutMs: number = 5000): Promise<T> =>
    Promise.race([
        promise,
        timeout(timeoutMs).then(() => {
            throw new Error(`Request timed out after ${timeoutMs}ms`)
        }),
    ]);

const fetchUserData = async () => {
    try {
        const response = await fetchWithTimeout(
            fetch('https://jsonplaceholder.typicode.com/todos'),
            200
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
    }
}

// fetchUserData();


// Promise.allSettled

const fetchData = async (id: number): Promise<{ id: number, data: string }> => {
    if (Math.random() > 0.7)
        throw new Error(`Failed to fetch data for ID ${id}`);
    return { id, data: `Data for ${id}` };
}

const processBatch = async (ids: number[]) => {
    const promises = ids.map(id =>
        fetchData(id)
            .then(value => ({ status: 'fulfilled' as const, value }))
            .catch(reason => ({ status: 'rejected' as const, reason }))
    );

    const results = await Promise.allSettled(promises);

    console.log(results);

    const successful = results
        .filter(result => result.status === 'fulfilled' && result.value.status === 'fulfilled'
        );

    const failed = results
        .filter(result => {
            if (result.status === 'rejected')
                return true;
            return result.value.status === 'rejected';
        });

    console.log(`Successfully processed: ${successful.length}`);
    console.log(`Failed: ${failed.length}`);

    return { successful, failed };
}

processBatch([1, 2, 3, 4, 5, 6, 7, 8]);