---
title: Managing your data with interactive tables
subtitle: 'Use the Tables page to easily view, edit, and manage your database entries'
enableTableOfContents: true
updatedOn: '2024-06-20T18:17:05.283Z'
---

The **Tables** page in the Unique Console offers a dynamic, visual interface for managing data. Fully interactive, this view lets you add, update, and delete records, filter data, modify columns, drop or truncate tables, as well as export data in both .json and .csv formats.

## Edit records

Edit individual entries directly within the table interface. Click on a cell to modify its contents. You don't have to press `Enter` (though you can). Just move your cursor to the next cell you want to modify. Click `Save x changes` when you're done.

![edit table records](/docs/manage/edit_record_drizzle.png)

## Add records

Add new records to your tables using the **Add record** button.

![add record to table](/docs/manage/add_record_drizzle.png)

A couple of things to note:

- You need to hit `Enter` for your input to register. When editing existing fields, you don't have to do this. But for new fields, if you tab to the next cell, you'll lose your input.
- You can leave `DEFAULT` fields untouched and the cell will inherit the right value based on your schema definition. For example, defaults for boolean fields are automatically applied when you click `Save changes`.

## Toggle columns

You can simplify your view by hiding (or showing) individual columns in the table. You're not modifying content here; deselect a checked column to hide it, and re-select the column to show it again. Your selections are saved as a persistent filter.

![toggle columns in table view](/docs/manage/toggle_columns_drizzle.gif)

## Add filters

Filters let you store simplified views of your data that you can come back to later. You can use dropdown-filtering to select columns, conditions, and input text for the filter.

![add filter to table view](/docs/manage/filter_drizzle.gif)

Each new filter is added as a **View** under your list of Tables.

![view filter views under tables](/docs/manage/view_filters_drizzle.gif)

## Delete records

Use the checkboxes to mark any unwanted records for deletion, or use the select-all checkbox for bulk deletion. Click `Delete x records` to complete the process.

![delete record from table](/docs/manage/delete_record_drizzle.png)

## Export data

You can also use the checkboxes to mark records for export. Select the records you want to include in your export, then choose `Export selected...` from the export dropdown.

Or just choose `Export all..` to download the entire contents of the table.

You can export to either JSON or CSV.

![export data from table](/docs/manage/export_drizzle.png)
