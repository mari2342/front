import axios from "axios";

const getPlanes = async () => {
    const planes = await axios.get('https://backend-production-9fa0.up.railway.app/api/planes');

    return planes.data;
}

const getPlane = async (id) => {
    const plane = await axios.get(`https://backend-production-9fa0.up.railway.app/api/planes/${id}`);

    return plane.data;
}

export const deletePlane = async (id) => {
    const delPlane = await axios.delete(`https://backend-production-9fa0.up.railway.app/api/planes/${id}`);

    return delPlane.data;
}

const createPlane = async (planeData) => {
    const planes = await axios.post(`https://backend-production-9fa0.up.railway.app/api/planes`, planeData);

    return planes.data;
}

const planesServise = {
    getPlanes,
    getPlane,
    createPlane,
    deletePlane
}

export default planesServise;
