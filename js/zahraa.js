let menuToggle = document.querySelector('.toggle'),
    menuToggleMob = document.querySelector('.toggle-mob'),
    myside = document.querySelector("#sidebar"),
    myScreen= document.querySelector("#screen-id"),
    menuTitle1 = document.querySelector('.title1'),
    mylist1 = document.querySelector("#list1"),
    myicon1 = document.querySelector("#icon1"),
    menuTitle2 = document.querySelector('.title2'),
    mylist2 = document.querySelector("#list2"),
    myicon2 = document.querySelector("#icon2"),
    searchIcon = document.querySelector('.search-icon'),
    searchIconMob = document.querySelector('.search-icon-mob'),
    searching = document.querySelector("#searching"),
    closingSid = document.querySelector("#closing-sid"),
    closing = document.querySelector("#closing");

    menuToggle.onclick = () => {
        myScreen.classList.toggle('screen-show'),
        menuToggle.classList.toggle('active'),
        myside.classList.toggle("show")
    }

    menuToggleMob.onclick = () => {
        myScreen.classList.toggle('screen-show'),
        myside.classList.toggle("show")
    }

    myScreen.onclick = () => {
        myScreen.classList.remove('screen-show'),
        menuToggle.classList.remove('active'),
        myside.classList.remove("show")
    }

    closingSid.onclick = () => {
        myScreen.classList.remove('screen-show'),
        menuToggle.classList.remove('active'),
        myside.classList.remove("show")
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

    searchIconMob.onclick = () => {
        searching.classList.add("contner-search-show");
    }

    closing.onclick = () => {
        searching.classList.remove("contner-search-show");
    }
