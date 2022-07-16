import jwt from 'jsonwebtoken';

const secret = 'test';

const auth = async ( req, res, next ) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('Middleware token:', {token});
        
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token, secret);
            console.log('LOCAL', {decodedData});
            
            req.userId = decodedData?.id;
        }else{
            decodedData = jwt.decode(token);

            console.log('GOOGLE', {decodedData});
            req.userId = decodedData?.sub;
        }
        next();
    } catch (error) {
        console.log({error});
        
    }
}

export default auth;