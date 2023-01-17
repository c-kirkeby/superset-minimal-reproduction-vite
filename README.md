### Superset Minimal Reproduction

There's a compile issue which causes the builds to fail. This was created using
`pnpm create vite my-vue-app --template react-ts`, and all of the extraneous files
stripped away. I have not hooked this up to a Superset instance since it doesn't get
past the compilation step.

To replicate the issue, run:

`pnpm run build`

or if you prefer `npm`:

`npm run build`
