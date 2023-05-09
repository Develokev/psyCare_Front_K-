const urlBase = 'http://localhost:3010'

export const masterFetch = async (url, method, body = {}) => {

    let options = {};

    console.log('esta es la url que llega al fetch', url)

    const data = { ...body }

    try {
        if (method == "POST" || method == "PUT" || method == "DELETE") {

            options = {
                method,
                body: JSON.stringify(data),
                mode: 'cors',
                cache: 'force-cache',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }

        let respuesta = await fetch(`${urlBase}${url}`, options);

        let resp = await respuesta.json();

        console.log('esto es RESP en Fetch', resp)

        return resp;
        
    } catch (error) {
        
        console.log('FAILED while fetching', error)
    }
}
