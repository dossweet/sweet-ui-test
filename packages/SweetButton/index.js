import SweetButton from './src/index'

SweetButton.install = function (Vue){
    Vue.component(SweetButton.name, SweetButton);
}

export default SweetButton;
