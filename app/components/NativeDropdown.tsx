import React from "react";
import { View, Text } from "react-native";
import * as DropdownMenu from "zeego/dropdown-menu";
import RoundedButton from "./RoundedButton";

const NativeDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <RoundedButton icon={"ellipsis-horizontal"} text={"More"} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        loop={true}
        side="bottom"
        align="start"
        alignOffset={0}
        avoidCollisions={true}
        collisionPadding={10}
        sideOffset={5}
      >
        <DropdownMenu.Item key="statement">
          <DropdownMenu.ItemTitle>Statement</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: "list.bullet.rectangle.fill",
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
        <DropdownMenu.Item key="converter">
          <DropdownMenu.ItemTitle>Converter</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: "coloncurrencysign.arrow.circlepath",
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
        <DropdownMenu.Item key="background">
          <DropdownMenu.ItemTitle>Background</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: "photo.fill",
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
        <DropdownMenu.Item key="add-account">
          <DropdownMenu.ItemTitle>Add Account</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: "person.badge.plus",
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default NativeDropdown;
