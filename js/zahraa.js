let menuToggle = document.querySelector('.toggle'),
    myside = document.querySelector("#sidebar"),
    menuTitle1 = document.querySelector('.title1'),
    mylist1 = document.querySelector("#list1"),
    myicon1 = document.querySelector("#icon1"),
    menuTitle2 = document.querySelector('.title2'),
    mylist2 = document.querySelector("#list2"),
    myicon2 = document.querySelector("#icon2"),
    searchIcon = document.querySelector('.search-icon'),
    searching = document.querySelector("#searching"),
    closing = document.querySelector("#closing");

    menuToggle.onclick = () => {
        menuToggle.classList.toggle('active'),
        myside.classList.toggle("show")
    }
    
    menuTitle1.onclick = () => {
        myicon1.classList.toggle('rotate'),
        mylist1.classList.toggle("Features")
    }

    menuTitle2.onclick = () => {
        myicon2.classList.toggle('rotate'),
        mylist2.classList.toggle("Features")
    }

    searchIcon.onclick = () => {
        searching.classList.add("contner-search-show");
    }

    closing.onclick = () => {
        searching.classList.remove("contner-search-show");
    }