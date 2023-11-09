import storage from "./storage"

const addData = (payload) => {
    const curData = storage.get();

    if(curData !== null) {
        const combData= [...curData, payload ]
        storage.set(combData);
    } else {
        storage.set([payload])
    }

    return {
        data: payload,
    }
}

const service = {
    addData
}

export default service;