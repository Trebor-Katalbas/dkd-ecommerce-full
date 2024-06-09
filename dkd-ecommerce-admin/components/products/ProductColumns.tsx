"use client";

import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link href={`/products/${row.original._id}`} className="hover:text-red-1">
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      return row.original.category.map((category) => category.title).join(", ");
    },
  },
  {
    accessorKey: "collections",
    header: "Collections",
    cell: ({ row }) => {
      console.log(row.original.collections);
      return row.original.collections.map((collection) => collection.title).join(", ");
    },
  },
  {
    accessorKey: "price",
    header: "Price (₱)",
  },
  {
    accessorKey: "stocks",
    header: "Stocks",
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete item="product" id={row.original._id} />,
  },
];
