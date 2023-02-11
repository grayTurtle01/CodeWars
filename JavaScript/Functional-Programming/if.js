function _if(flag, f1, f2){
	flag? f1(): f2()
}

_if(false, ()=> console.log('f1'), () => console.log('f2'))
