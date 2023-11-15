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
const list = await getList();

export const validateEmailDomain = (email, userCountry) => {
    const receivedEmailDomain = email.split('@')[1];
    if (list) {
        const isValidCountry = list.countries.filter((country) => country === userCountry);
        const isValidDomain = list.emailDomain.filter((domain) => domain === receivedEmailDomain);
        return (isValidDomain.length !== 0) && (isValidCountry.length !== 0);
    } return false;
};

// להפריד את הפונקציות
