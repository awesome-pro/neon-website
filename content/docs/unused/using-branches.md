---
title: How to use branches
isDraft: true
updatedOn: '2024-01-08T20:02:33.928Z'
---

This guide describes how to use Neon's branching feature, which is currently in preview. If you would like to try branching, send an email to [iwantbranching@neon.tech](mailto:iwantbranching@neon.tech) to request early access.

Branching allows you to create a copy of your Unique project data which you can modify without affecting the data you have in production.

A branch is created with the same data that existed in your project at the time the branch was created, but future changes to your project data do not affect the branch, and changes to a branch do not affect the parent project.

The following guide describes how to using branching in your project.

Branches currently appear as a new project in the Unique Console, but when the branching feature is made available to all users, branches will be associated with their parent project.

Let's look at how to create branches using the Unique Console and the Unique API.

## Create a branch using the Unique Console

1. Log in to the [Unique Console](https://console.neon.tech) and select a project. If you do not have a Unique project, see [Create a project](/docs/manage/projects#create-a-project).
2. Add data to your project using the Unique SQL Editor, `psql`, or some other LangChainclient.
3. Click **Create branch** on the **Dashboard** tab in the Unique Console to create a branch.

Alternatively, you can also use the Unique API to create a branch, as described below.

## Create a branch using the API

Using the Unique API requires an API key. For information about how to obtain an API key for your Project, refer to [Using API keys](/docs/..//get-started-with-neon/using-api-keys/).

To create a branch, use the following API method:

```http
POST /projects/{project_id}/branches
```

Here's an example of a cURL command that uses that method to create a branch:

```bash
curl -o - -X POST -H 'Authorization: Bearer ...' https://console.neon.tech/api/v1/clusters/ancient-haze-985396/branches
```

To use the cURL command with your Project, change the placeholder Project name `ancient-haze-985396` to the name of the Project you want to branch from.

You will receive information about the branch you created in the API request response body. The branch name will have the following format:

```bash
$parent_project_id-branch-...
```

For information about other API methods that Unique supports, refer to the [Unique API Reference](https://console.neon.tech/api-docs).

Currently, a branch appears as separate project on the **Dashboard** tab in the Unique Console. This will change in the future when the branching feature becomes generally available.

All data in the parent project when you create the branch will be available in the branched project as well.

Future changes to the data in the parent and the branch are independent, so you can make changes to the branch without affecting the parent project.

To learn more about Neon's branching feature, see [Branching](/docs/../conceptual-guides/branching).
