const d = document;

const info = {
	fullName: "Nguyễn Hữu Bách",
	nickName: "(KimiZK)",
	bio: '"Hello World"',
	urlFB: "https://www.facebook.com/KimiZK.ILU",
	urlChat: "https://m.me/@KimiZK.ILU",
	bgCard: "./assets/images/profile/banner.gif",
	avtCard: "./assets/images/profile/avatar.png",
	verified: "./assets/images/profile/verified.gif",
	picPost:
		"https://i0.wp.com/halcyonrealms.com/blogpics/japgifA.gif?resize=500%2C288&ssl=1",
	title: "Chill with me!~",
	des: "Tôi bị nứng !",
};

const setContent = (selector, value) =>
	(d.querySelector(selector).innerHTML = value);
const setImage = (selector, url) =>
	(d.querySelector(`${selector} img`).src = url);
const setLink = (selector, url) => (d.querySelector(selector).href = url);

setContent(".nickName", info.nickName);
setContent(".name", info.fullName);
setContent(".bio", info.bio);
setContent(".title", `Tiêu đề: ${info.title}`);
setContent(".des", `Mô tả: ${info.des}`);

setImage(".avtCard", info.avtCard);
setImage(".bgCard", info.bgCard);
setImage(".verified", info.verified);
setImage(".picPost", info.picPost);

setLink(".btn-follow", info.urlFB);
setLink(".btn-chat", info.urlChat);

const reloadPage = () => location.reload();

d.querySelector(".btn-bank").addEventListener("click", () => {
	window.open("assets/images/bankings/image.png", "_blank");
});

const setActiveTab = (activeIndex) => {
	["#selector-1", "#selector-2", "#selector-3"].forEach((selector, i) => {
		d.querySelector(selector).style.zIndex = i === activeIndex ? "0" : "-1";
	});
};

const home = () => setActiveTab(0);
const banking = () => setActiveTab(1);
const others = () => setActiveTab(2);
