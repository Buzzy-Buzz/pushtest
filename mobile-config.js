/**
 * Created by adamginsburg on 17/12/2014.
 */
App.info({
    id: 'pushtest',
    name: 'Push Test',
    description: 'Push Test',
    version: '1.0'
});




App.setPreference('StatusBarOverlaysWebView', false);
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('KeyboardShrinksView', false);
App.accessRule('blob:*');
App.accessRule('*');

