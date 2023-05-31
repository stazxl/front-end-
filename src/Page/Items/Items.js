import { 
    BooleanField,
    BooleanInput,
    Create,
    Edit,
    DateField, 
    DateInput,
    Datagrid, 
    List, 
    NumberField,
    NumberInput,
    Show,
    SimpleForm,
    TextField, 
    TextInput,
} from 'react-admin';

export const ItemsCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="color" />
            <TextInput source="type" />
            <NumberInput source="price" />
            <NumberInput source="quantity" />
        </SimpleForm>
    </Create>
);

export const ItemsList = () => (
    <List hasCreate={true}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="color" />
            <NumberField source="price" />
            <NumberField source="quantity" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const ItemsShow = () => (
    <Show>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="published_at" />
        <TextField source="category" />
        <BooleanField source="commentable" />        
    </Show>
);

export const ItemsEdit = () => (
    <Edit>
        <TextInput source="id" disabled />
        <TextInput source="title" />
        <DateInput source="published_at" />
        <TextInput source="category" />
        <BooleanInput source="commentable" />
    </Edit>
);
