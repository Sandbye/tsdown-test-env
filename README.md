# tsdown-test-env

This repo tries to give examples and is an experimental monorepo (PNPM) utilzing tsdown.

### Normal Modern ESM Modules ✅

Location: [Go To File](backend/src/scenarios/standard.ts)
Package: [Go To Package](packages/types/package.json)

Normal modern ESM modules work quite well. Clicking on the interface or type goes to the correct line and file.

However, clicking on the property of a type (e.g., the `id` property on the `account` object or any of its inner objects) will take you to the interface where it is declared, rather than the specific line where the property itself is defined. Most likely, what is desired is the actual line where the property is declared, not the line for the declared interface.

Works great, for most use cases.

### Namespaces

Location: [Go To File](backend/src/scenarios/namespaced.ts)
Package: [Go To Package](packages/types-ns/package.json)

Namespaces sometimes struggle with declaration maps. For example:

- Clicking on `Types.Utils.OrdersList` in `backend/src/scenarios/namespaced.ts` will take you to the line for `ProductsList` instead.
- Clicking on `Types.Utils.ProductsList` will take you to the `Utils` namespace instead of the actual interface or type for that object.
- Clicking on properties within namespaces will take you to the namespace rather than the actual interface or type for that object.

### Module Alias / Namespaced Exports / export \* as

Location: [Go To File](backend/src/scenarios/export-as.ts)
Package: [Go To Package](packages/types-export-as/package.json)

This is referred to as "export-as" in the project. These exports don't always work well but sometimes perform correctly.

- Clicking on properties goes to the correct interface but not the specific line.
- Clicking on the outermost accessed type (e.g., `Types.Account.Default`) will take you to the correct type when clicking on "Default."
- However, clicking on "Account" on the same line will take you to another separate file in the same package/library (e.g., `src/utils/utils.ts` instead of `src/utils/account-types/account.ts`).

This indicates some inconsistencies in how the declaration map handles these cases.
