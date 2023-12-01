/******START UPPER NAV*****/
//Redirect to Account Center
function handleAccountClick() {
    window.location.href= "account.html";
}
document.querySelector('[data-id="header-account-center-link"]').addEventListener('click', handleAccountClick);
//End Redirect to Account Center

//Redirect to Reward Center
function handleRewardClick() {
    window.location.href= "reward.html";
}
document.querySelector('[data-id="header-reward-center-link"]').addEventListener('click', handleRewardClick);
//End Redirect to Reward Center

//Redirect to Shop Center
function handleShopClick() {
    window.location.href= "shop.html";
}
document.querySelector('[data-id="header-shop-center-link"]').addEventListener('click', handleShopClick);
//End Redirect to Shop Center

//Redirect to Support Center
function handleSupportClick() {
    window.location.href= "support.html";
}
document.querySelector('[data-id="header-support-center-link"]').addEventListener('click', handleSupportClick);
//End Redirect to Support Center
/******END UPPER NAV*****/