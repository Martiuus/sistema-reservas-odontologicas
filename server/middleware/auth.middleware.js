    import jwt from 'jsonwebtoken';
    
      const authMiddleware = (req, res, next) => {
      const token = req.header('x-auth-token');

      if (!token) {
        return res.status(401).json({ message: 'No hay token, autorización denegada.' });
      }
    
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
      } catch (error) {
        res.status(401).json({ message: 'El token no es válido.' });
      }
    };
    
    export default authMiddleware;
    