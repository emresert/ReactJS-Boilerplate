let API_URL: string | undefined = "";

if (process.env.NODE_ENV == "production") {

    API_URL = process.env.PRODUCTION_KEY  //  https://.../V1 etc.

} else if (process.env.NODE_ENV == "development") {

    API_URL = process.env.DEVELOPMENT_KEY // https://.../V1 etc.

}

const GET_TOKEN = () => {
    return localStorage.getItem("token");
};

export { API_URL, GET_TOKEN }
