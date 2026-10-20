import jwt from "jsonwebtoken"
import zod from "zod"

const jwtPassword = "passowrd07"

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6)

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)
    if(!usernameResponse.success || !passwordResponse.success) return null;

    const signature = jwt.sign({ username }, jwtPassword)

    return signature
}

function verifyJwt(token){
    let ans = true;
    try {
        jwt.verify(token, jwtPassword)
    } catch (error) {
        ans = false
    }
    return ans
}

function decodeJwt(token){
    const decoded = jwt.decode(token)
    if(decoded) {
        return true
    } else {
        return false
    }
}


const token = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRpdWdkZnU5Z2RAZ21haWwuY29tIiwiaWF0IjoxNzkyNDYwMDE3fQ.AKx0LWFDi109qXfkXMWVBMXtCsYoYJH2xpQI556_xXc")
console.log(token);
