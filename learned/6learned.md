# Forms

## Exercise

Event default is needed to stop hard refresh with values. React create a fake
event which we interact they do this performance reasons. You can access the
nativeElement via `event.nativeEvent`. Using `console.dir` will list all of the
different properties of a DOM node instead of rendered mark up

## Extra credit 1

More direct way of access the value of a input is using `useRef` hook but would
still opt for using event in this use case

## Extra credit 2

Put the `role="alert"` type to inform screenreader users that there is an error.
Only submit as a default behavior so `event.preventDefault()` is not needed. To
be explicit use `Boolean(error)` to convert value into a true/false value

## Extra credit 3

Controlled Form input are where react manage the value we update it onChange
(formik uses a controlled method) this allows us set a value to something
different to what the user is typing (in the example making the input
lowercase). Default of an input is an empty string. Only use this method when
needing change the input from what the user is typing.
