import test from 'ava';
import mnemonicWords from '.';

test('main', t => {
	t.true(Array.isArray(mnemonicWords));
	t.true(mnemonicWords.length > 0);
	t.is(mnemonicWords[20], 'action');
});
