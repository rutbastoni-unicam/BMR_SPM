import { defineMock } from 'vite-plugin-mock-dev-server';

const useMock = import.meta.env.VITE_USE_MOCK_API === 'true';

export default defineMock({
    url: '/weatherforecast',
    method: 'GET',
    status: 200,
    enabled: useMock,
    body: [
        { date: '2025-01-01', temperatureC: 22, summary: 'Sunny (mock)' },
        { date: '2025-01-02', temperatureC: 18, summary: 'Cloudy (mock)' },
    ],
});