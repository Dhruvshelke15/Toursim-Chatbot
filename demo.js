const {MongoClient} = require('mongodb')

async function main() {

    const uri = "mongodb+srv://admin:admin@cluster0.t0ntt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);