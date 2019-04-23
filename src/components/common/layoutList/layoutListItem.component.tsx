import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '../text.component';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore
interface TouchableProps extends TouchableOpacityProps {
  onPress: (index: number) => void;
}

interface ComponentProps extends ListDerivedProps, TouchableProps {
  title: string;
  description: string;
}

export type LayoutListItemProps = ThemedComponentProps & TouchableProps & ComponentProps;

class LayoutListItemComponent extends React.Component<LayoutListItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, title, description, ...restProps } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.65}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <Text style={themedStyle.title}>{title}</Text>
        <Text style={themedStyle.description}>{description}</Text>
      </TouchableOpacity>
    );
  }
}

export const LayoutListItem = withStyles(LayoutListItemComponent, (theme: ThemeType) => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme['color-basic-300'],
  },
  title: {
    fontSize: 15,
    color: theme['color-basic-600'],
  },
  description: {
    marginTop: 8,
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    color: theme['font-primary-color'],
  },
}));