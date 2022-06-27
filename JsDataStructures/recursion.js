(function Foo(i) {
    // sadəcə burda kod yazmağınıza icaze verilir
    // teleb olunan 1-100 arasındakı ədədlərin ekrana cap edilməsini təmin etməkdir
    // while for və digər loop expressionları istifadə etmək olmaz
    if(i>0){
        Foo(i-1);
        console.log(i);
    }
    return
})(100)