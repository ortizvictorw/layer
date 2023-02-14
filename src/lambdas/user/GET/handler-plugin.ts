const createHandlerPlugin =({ dbConnectionPlugin }: any) =>
  async (event: any) => {

    
    let results = await dbConnectionPlugin.query('SELECT * FROM user')
    // Run clean up function
    await dbConnectionPlugin.end()
   
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "query desde plugin mysql plugin",
          input: results,
        },
        null,
        2
      ),
    };
  };
  
  export {
    createHandlerPlugin
  }