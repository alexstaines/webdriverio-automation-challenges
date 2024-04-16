describe('iFrame', () => {

    //executing javascript to show hidden elements
    it('Working with iframe', async () => {
        await browser.url('https://the-internet.herokuapp.com/iframe');

        const iframe = await $('#mce_0_ifr');
        await browser.switchToFrame(iframe);
        await expect($('#tinymce')).toExist();

        await browser.switchToParentFrame();
        await expect($('div.example h3')).toHaveText('An iFrame containing the TinyMCE WYSIWYG Editor');
    });
});