const share1_1=document.getElementById('share1'), share2_2=document.getElementById('share2'), share3_3=document.getElementById('share3'),
share6_6=document.getElementById('share6'), share5_5=document.getElementById('share5'), share4_4=document.getElementById('share4'),
share7_7=document.getElementById('share7');

share1_1.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text: 'Lisenziya',
            url: '5529.pdf'
        }).then(() => {
            console.log('Təşəkkürlər');
        })
        .catch((err) => console.error(err));
    }
    else{
        alert('Tarayıcı Dəstəkləmir');
    }
});

share2_2.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text: 'Lisenziya',
            url: '5529.pdf'
        }).then(() => {
            console.log('Təşəkkürlər');
        })
        .catch((err) => console.error(err));
    }
    else{
        alert('Tarayıcı Dəstəkləmir');
    }
});

share3_3.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text: 'Lisenziya',
            url: '5529.pdf'
        }).then(() => {
            console.log('Təşəkkürlər');
        })
        .catch((err) => console.error(err));
    }
    else{
        alert('Tarayıcı Dəstəkləmir');
    }
});

share4_4.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text: 'Lisenziya',
            url: '5529.pdf'
        }).then(() => {
            console.log('Təşəkkürlər');
        })
        .catch((err) => console.error(err));
    }
    else{
        alert('Tarayıcı Dəstəkləmir');
    }
});

share5_5.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text: 'Lisenziya',
            url: '5529.pdf'
        }).then(() => {
            console.log('Təşəkkürlər');
        })
        .catch((err) => console.error(err));
    }
    else{
        alert('Tarayıcı Dəstəkləmir');
    }
});

share6_6.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text: 'Lisenziya',
            url: '5529.pdf'
        }).then(() => {
            console.log('Təşəkkürlər');
        })
        .catch((err) => console.error(err));
    }
    else{
        alert('Tarayıcı Dəstəkləmir');
    }
});

var filesArray=['5529.pdf'];
share7_7.addEventListener('click', event => {
    if(navigator.canShare && navigator.canShare({files : filesArray})){
        navigator.share({
            text: 'Lisenziya',
            files: filesArray
        }).then(() => {
            console.log('Təşəkkürlər');
        })
        .catch((err) => console.error(err));
    }
    else{
        alert('Tarayıcı Dəstəkləmir');
    }
});