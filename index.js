async function getList() {
    try {
        const response = await fetch('https://audience-boost.minutemediacdn.com/allowlist.json');
        const list = await response.json();
        return list;
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
    return null;
}

const validateEmailDomain = async (email) => {
    const list = await getList();
    const receivedEmailDomain = email.split('@')[1];
    if (list) {
        const isValidDomain = list.emailDomain.includes(receivedEmailDomain);
        return isValidDomain;
    } return false;
};

const validateCountry = async (userCountry) => {
    const list = await getList();
    if (list) {
        const isValidCountry = list.countries.includes(userCountry);
        return isValidCountry;
    } return false;
};

