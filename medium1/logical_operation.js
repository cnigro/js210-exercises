// What will each line of the following code return?

console.log((false && undefined));
console.log((false || undefined));
((false && undefined) || (false || undefined));
((false || undefined) || (false && undefined));
((false && undefined) && (false || undefined));
((false || undefined) && (false && undefined));
('a' || (false && undefined) || '');
((false && undefined) || 'a' || '');
('a' && (false || undefined) && '');
((false || undefined) && 'a' && '');

// false
// undefined
// undefined
// false
// false
// undefined
// "a"
// "a"
// undefined
// undefined

// A falsy value will short circuit &&, but will not short circuit ||,
// and since we're evaluating left-to-right, if we have falsy values
// on both sides of the operator, the return value will be the one to
// the right of the operator.