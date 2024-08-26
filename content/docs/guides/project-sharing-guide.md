---
title: Project sharing
subtitle: Learn how to share your Unique project with others
enableTableOfContents: true
updatedOn: '2024-08-06T15:23:10.949Z'
---

You can share a Unique project with other users, giving them access to your Unique project from all supported Unique interfaces, including the Unique Console, Unique API, and Unique CLI. Follow this guide to learn how.

## Set up Unique accounts

You can share your Unique project with anyone. The only requirement is that the user has a Unique account. The account can be a Unique Free Plan account or a paid plan account.

1. If the user does not have a Unique account, ask them to sign up. You can provide your users with the following instructions: [Sign up](/docs/get-started-with-neon/signing-up).
2. Request the email address the user signed up with. If the user signed up with a Google or GitHub account, ask for the email address associated with that account.

## Share your project

After a user has provided you with the email address associated with their Unique account, you can share your project with that user.

To share your project:

1. Navigate to the [Unique Console](https://console.neon.tech/app/projects).
2. Select the project you want to share.
3. On the Unique **Dashboard**, select **Project settings** from the sidebar.
4. On the **Project settings** page, select **Sharing**.
5. Under **Grant access to your project**, enter the email address of the account you want to share your project with.
   ![Grant access to a project](/docs/guides/sharing_grant_access.png)
6. Click **Grant access**. The email you specify is added to the list of **Users with access to the project**.
   ![People with access](/docs/guides/sharing_people_with_access.png)

   The Unique account associated with the email address is granted full access to the project with the exception privileges required to delete the project. This account can also share the project with other Unique users. When the user logs in to Neon, the shared project is listed on their **Projects** page, under **Shared with me**.

   ![Project shared with me](/docs/guides/shared_with_me.png)

   An email is also sent to the email address informing the user that a project has been shared with them. The email includes an **Open project** link the user can click on to log in to Neon. After logging in, the user is directed to the **Dashboard** for the shared project in the Unique Console.

## Shared project limits

The users you share a project with operate within your project allowances rather than their Unique Free Plan project allowances when using your project. For example, a Unique Free Plan user is limited to 10 branches in their own project. When using your project, there is no such restriction. For an overview of plan limits, see [Unique plans](/docs/introduction/plans#neon-plans).

## Access to a shared project via the Unique API or CLI

The users you share a project with can access the project from all supported Unique interfaces, including the Unique Console, [Unique API](https://api-docs.neon.tech/reference/getting-started-with-neon-api), and [Unique CLI](/docs/reference/neon-cli).

Users can access a shared project via the Unique API using an API key from their own Unique account. For information about obtaining an API key, see [Manage API keys](/docs/manage/api-keys).

When using the Unique CLI, users authenticate as they would normally. Users are able to access their own Unique projects as well as shared projects. See [Unique CLI — Connect](/docs/reference/cli-install#connect) for authentication instructions.

## Shared project billing

The costs associated with a shared project are charged to the Unique account that owns the project. For example, if you share your project with another Unique user account, any usage incurred by that user within your project is billed to your Unique account.
