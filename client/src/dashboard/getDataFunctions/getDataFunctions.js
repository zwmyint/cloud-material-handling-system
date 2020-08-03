const requestSOs = async (setLoadedSOs, sendRequest) => {
  try {
    const responseData = await sendRequest(
      process.env.REACT_APP_BACKEND_URL + '/so'
    );

    setLoadedSOs(responseData);
    return true;
  } catch (err) {
    console.log('Could not fetch SOs');
    return false;
  }
};

const requestMHMs = async (setLoadedMHMs, sendRequest) => {
  try {
    const responseData = await sendRequest(
      process.env.REACT_APP_BACKEND_URL + '/mhm'
    );

    setLoadedMHMs(responseData);
    return true;
  } catch (err) {
    console.log('Could not fetch MHMs', err);
    return false;
  }
};

const requestJobs = async (setLoadedJobs, sendRequest) => {
  try {
    const responseData = await sendRequest(
      process.env.REACT_APP_BACKEND_URL + '/jobs'
    );

    setLoadedJobs(responseData);
    return true;
  } catch (err) {
    console.log('Could not fetch Jobs');
    return false;
  }
};

const requestDashboardData = async (
  setLoadedSOs,
  setLoadedMHMs,
  setLoadedJobs,
  sendRequest
) => {
  try {
    const stat1 = await requestSOs(setLoadedSOs, sendRequest);
    const stat2 = await requestMHMs(setLoadedMHMs, sendRequest);
    const stat3 = await requestJobs(setLoadedJobs, sendRequest);
    if (stat1 && stat2 && stat3) {
      return 'success';
    }
    return 'failed';
  } catch (err) {
    console.log('[requestDashboardData], An error occured', err);
  }
};

export default requestDashboardData;
