import { IServices } from "../services";

const createHandlerOrm = ( { userService, sqs } : IServices ) =>
  async (event: any) => {
    
    const res1 = await userService.findAll()
    const res =  sqs
    
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "query desde plugin mysql ORM",
          input: {res, res1},
        },
        null,
        2
      ),
    };
  };
  
  export {
    createHandlerOrm
  }