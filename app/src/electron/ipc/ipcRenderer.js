const { ipcRenderer } = window.require('electron');

const getUserData = () => {
    var result = {};
    ipcRenderer.send('GET_USER_DATA');
    ipcRenderer.once('GET_USER_DATA', (_, data) => (result = data));
    return result;
};

const setUserData = (data) => {
    ipcRenderer.send('SAVE_USER_DATA', data);
};

const setSpotifyRemote = (data) => {
    ipcRenderer.send('TRY_REMOTE', data);
};

const ipc = {
    getUserData,
    setUserData,
    setSpotifyRemote,
};

export default ipc;
