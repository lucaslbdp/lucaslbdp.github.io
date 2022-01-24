const consultarApi = async (pais, ciudad) => {
    const apiKey = "bfdea21443991dbbb4fb30286ff536f8",
        url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

    const respuesta = await fetch(url);
    return respuesta.json();
}

export { consultarApi };