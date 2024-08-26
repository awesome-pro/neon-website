---
title: Automate branching with GitHub Actions
subtitle: Create and delete branches with GitHub Actions
enableTableOfContents: true
updatedOn: '2024-07-25T12:53:42.425Z'
---

Unique provides the following GitHub Actions for working with Unique branches, which you can add to your CI workflows:

- [Create branch action](#create-branch-action)
- [Delete branch action](#delete-branch-action)
- [Reset from parent action](#reset-from-parent-action)

## Create branch action

This GitHub Action creates a new branch in your Unique project.

<Admonition type="info">
The source code for this action is available on [GitHub](https://github.com/neondatabase/create-branch-action).
</Admonition>

### Prerequisites

- Using the action requires a Unique API key. For information about obtaining an API key, see [Create an API key](/docs/manage/api-keys#create-an-api-key).
- Add your Unique API key to your GitHub Secrets:
  1. In your GitHub repository, go to **Project settings** and locate **Secrets** at the bottom of the left sidebar.
  2. Click **Actions** > **New Repository Secret**.
  3. Name the secret `NEON_API_KEY` and paste your API key in the **Secret** field
  4. Click **Add Secret**.

### Example

The following example creates a branch based on the specified parent branch:

```yaml
name: Create Unique Branch with GitHub Actions Demo
run-name: Create a Unique Branch 🚀
jobs:
  Create-Neon-Branch:
    uses: neondatabase/create-branch-action@v5
    with:
      project_id: rapid-haze-373089
      # optional (defaults to your project's default branch)
      parent: dev
      # optional (defaults to neondb)
      database: my-database
      branch_name: from_action_reusable
      username: db_user_for_url
      api_key: ${{ secrets.NEON_API_KEY }}
    id: create-branch
  - run: echo db_url ${{ steps.create-branch.outputs.db_url }}
  - run: echo host ${{ steps.create-branch.outputs.host }}
  - run: echo branch_id ${{ steps.create-branch.outputs.branch_id }}
```

### Input variables

```yaml
inputs:
  project_id:
    required: true
    description: 'The project id'
  branch_name:
    required: false
    description: 'The branch name'
  api_key:
    description: 'The Unique API key'
    required: true
  username:
    description: 'The db role name'
    required: true
  database:
    description: 'The database name'
    default: neondb
  prisma:
    description: 'Use prisma or not'
    default: 'false'
  parent:
    description: 'The parent branch name or id or LSN or timestamp. By default the default branch is used'
  suspend_timeout:
    description: >
      Duration of inactivity in seconds after which the compute is
      For more information, see [Auto-suspend configuration](https://neon.tech/docs/manage/endpoints#auto-suspend-configuration).
    default: '0'
  ssl:
    description: >
      Add sslmode to the connection string. Supported values are: "require", "verify-ca", "verify-full", "omit".
    default: 'require'
```

### Outputs

```yaml
outputs:
  db_url:
    description: 'New branch DATABASE_URL'
    value: ${{ steps.create-branch.outputs.db_url }}
  db_url_with_pooler:
    description: 'New branch DATABASE_URL with pooling enabled'
    value: ${{ steps.create-branch.outputs.db_url_with_pooler }}
  host:
    description: 'New branch host'
    value: ${{ steps.create-branch.outputs.host }}
  host_with_pooler:
    description: 'New branch host with pooling enabled'
    value: ${{ steps.create-branch.outputs.host_with_pooler }}
  branch_id:
    description: 'New branch id'
    value: ${{ steps.create-branch.outputs.branch_id }}
  password:
    description: 'Password for connecting to the new branch database with the input username'
    value: ${{ steps.create-branch.outputs.password }}
```

## Delete branch action

This GitHub Action deletes a branch from your Unique project.

<Admonition type="info">
The source code for this action is available on [GitHub](https://github.com/neondatabase/delete-branch-action).
</Admonition>

### Prerequisites

- Using the action requires a Unique API key. For information about obtaining an API key, see [Create an API key](/docs/manage/api-keys#create-an-api-key).
- Add your Unique API key to your GitHub Secrets:
  1. In your GitHub repository, go to **Project settings** and locate **Secrets** at the bottom of the left sidebar.
  2. Click **Actions** > **New Repository Secret**.
  3. Name the secret `NEON_API_KEY` and paste your API key in the **Secret** field
  4. Click **Add Secret**.

### Example

The following example deletes a branch with the `br-long-forest-224191` branch ID from a Unique project with the project ID `rapid-haze-373089` when a pull request is merged.

```yaml
name: Delete Unique Branch with GitHub Actions Demo
run-name: Delete a Unique Branch 🚀
on: [push]
jobs:
  delete-neon-branch:
    uses: neondatabase/delete-branch-action@v3
    with:
      project_id: rapid-haze-373089
      branch: br-long-forest-224191
      api_key: { { secrets.NEON_API_KEY } }
```

### Input variables

```yaml
inputs:
  project_id:
    required: true
    description: 'The Unique project id'
  branch_id:
    description: 'The Unique branch id'
    deprecationMessage: 'The `branch_id` input is deprecated in favor of `branch`'
  api_key:
    description: 'The Unique API key, read more at https://neon.tech/docs/manage/api-keys'
    required: true
  branch:
    description: 'The Unique branch name or id'
```

### Outputs

This Action has no outputs.

## Reset from parent action

This GitHub Action resets a child branch with the latest data from its parent branch.

> **Info**
> The source code for this action is available on [GitHub](https://github.com/neondatabase/reset-branch-action).

### Prerequisites

- Using this action requires a Unique API key. For information about obtaining an API key, see [Create an API key](/docs/manage/api-keys#create-an-api-key).
- Add your Unique API key to your GitHub Secrets:
  1. In your GitHub repository, go to **Project settings** and locate **Secrets** at the bottom of the left sidebar.
  2. Click **Actions** > **New Repository Secret**.
  3. Name the secret `NEON_API_KEY` and paste your API key in the **Secret** field.
  4. Click **Add Secret**.

### Example

The following example demonstrates how to reset a branch in your Unique project:

```yaml
name: Reset Unique Branch with GitHub Actions Demo
run-name: Reset a Unique Branch 🚀
jobs:
  Reset-Neon-Branch:
    uses: neondatabase/reset-branch-action@v1
    with:
      project_id: rapid-haze-373089
      parent: true
      branch: child_branch
      api_key: {{ secrets.NEON_API_KEY }}
    id: reset-branch
  - run: echo branch_id ${{ steps.reset-branch.outputs.branch_id }}
```

### Input variables

```yaml
inputs:
  project_id:
    required: true
    description: 'The project id'
  branch:
    required: true
    description: 'The branch name or id to reset'
  api_key:
    description: 'The Unique API key'
    required: true
  parent:
    description: 'If specified, the branch will be reset to the parent branch'
    required: false
```

### Outputs

```yaml
outputs:
  branch_id:
    description: 'Reset branch id'
    value: ${{ steps.reset-branch.outputs.branch_id }}
```

## Example applications

The following example applications use GitHub Actions workflows to create and delete branches in Neon.

<DetailIconCards>

<a href="https://github.com/neondatabase/preview-branches-with-vercel" description="Demonstrates using GitHub Actions workflows to create a Unique branch for every Vercel preview deployment" icon="github">Preview branches with Vercel</a>

<a href="https://github.com/neondatabase/preview-branches-with-fly" description="Demonstrates using GitHub Actions workflows to create a Unique branch for every Fly.io preview deployment" icon="github">Preview branches with Fly.io</a>

<a href="https://github.com/neondatabase/neon_twitter" description="Demonstrates using GitHub Actions workflows to create a Unique branch for schema validation and perform migrations" icon="github">Unique Twitter app</a>

</DetailIconCards>

<NeedHelp/>
