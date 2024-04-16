// describe('Home', () => {
//     it('Open URL & assert title', async () => {
//         await browser.url('https://practice.sdetunicorns.com/');
//         await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
//     });
//     it('Open about page & assert url', async () => {
//         await browser.url('https://practice.sdetunicorns.com/');
//         await $('a=About').click();
//         await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
//     });
//     it('Click Get Started, & assert text', async () => {
//         await browser.url('https://practice.sdetunicorns.com/');
//         await $('#get-started').click();
//         await expect(browser).toHaveUrlContaining('#get-started');
//         //await expect(browser).not.toHaveUrlContaining('#get-started');
//     });

//     // it('get text', async () => {
//     //     await browser.url('https://practice.sdetunicorns.com/');
//     //     const el = await $('');
//     //     await expect(browser).toHaveText('');
//     //     await expect(browser).not.toHaveUrlContaining('#get-started');
//     // });
//     it('Click the text of all menu items', async () => {
//         await browser.url('/');

//         const expectedLinks = [
//             "Home",
//             "About",
//             "Shop",
//             "Blog",
//             "Contact",
//             "My Account",
//         ];
//         //chaining vs directly accessing $$
//         //const navLinks = await $('#primary-menu').$$('li[id*=menu');
//         const navLinks = await $$('#primary-menu li[id*=menu]');
//         const actualLinks = [];
//         for (const link of navLinks) {
//             actualLinks.push(await link.getText());
//         }
//         await expect(expectedLinks).toEqual(actualLinks);
//         //await expect(browser).not.toHaveUrlContaining('#get-started');
//     });
//     it('Blog recent posts', async () => {
//         await browser.url('/blog');

//         const posts = await $$('#recent-posts-3 li');
//         for (const post of posts) {
//             const text = await post.getText();
//             await expect(text.length).toBeGreaterThan(10);
//         }

//         await expect(posts).toHaveLength(5);
//     });

// });