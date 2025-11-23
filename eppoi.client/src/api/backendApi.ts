const API_BASE = '';

export async function getWeatherForecast() {
    const res = await fetch(`${API_BASE}weatherforecast`);
    if (!res.ok) throw new Error('Errore API');
    return res.json();
}