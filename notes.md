# Notes

I wanted to take notes to explain decisions, or to mention problems I am aware of but didn't address.

## Static code analysis and formatting

- Minor issue, but it might be a good idea to somehow use .gitignore as the source of .eslintignore and .prettierignore.
- Eslint is configured not to deal with code formatting.
- Prettier is used to make code formatting consistent.
- If we want eslint to do code formatting checks, we have to sync prettier and eslint.
- These rules should normally be enforce with something like with pre-commit hooks.
