const useTaps = (tabs) => {
  const arr = tabs ? tabs.childNodes : [];
  const handelClick = (e) => {
    arr.forEach((tab) => tab.classList.remove("active"));
    e.target.classList.add("active");
  };
  arr.forEach((tab) => tab.addEventListener("click", handelClick));
};

export default useTaps;
