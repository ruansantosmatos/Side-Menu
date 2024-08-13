let openNav = false
const stickOne = document.getElementsByClassName("stick-one")[0]
const stickTwo = document.getElementsByClassName("stick-two")[0]

const stickTree = document.getElementsByClassName("stick-tree")[0]
const headerBox = document.getElementsByClassName("header-box")[0]

const navigation = document.getElementsByClassName("navigation")[0]
const contentMain = document.getElementsByTagName('main')[0]

const anchor = document.querySelectorAll('.navigation>ul>li>a')
const headerSection = document.querySelectorAll('.navigation>ul>section>h4>span')

const animationIconMenu = () => {
    stickOne.classList.toggle("transform-stick-one")
    stickTwo.classList.toggle("transform-stick-two")
    stickTree.classList.toggle("transform-stick-tree")
    controlNavigation()
}

const openNavigation = () => {
    openNav = true
    headerBox.style.width = screen.width >= 1024 ? '350px' : '290px'
    navigation.style.width = screen.width >= 1024 ? '350px' : '290px'
    navigation.style.border = 'solid 1px #111;'

    contentMain.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
    headerSection.forEach(element => { element.style.opacity = '1' })
}

const closeNavigation = () => {
    headerBox.style.width = screen.width <= 1024 ? '0%' : '80px'
    navigation.style.width = screen.width <= 1024 ? '0%' : `80px`
    navigation.style.border = 'none'

    contentMain.style.backgroundColor = '#ffffffff'
    headerBox.style.transition = '0.3s'
    headerSection.forEach(element => { element.style.opacity = '0'})
}

const controlNavigation = () => {
    stickOne.classList.contains("transform-stick-one") ?
    openNavigation() : closeNavigation()
}