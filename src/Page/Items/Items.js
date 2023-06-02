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
    EditButton,
    ShowButton,
    SimpleShowLayout
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
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>
);

export const ItemsShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" />
        <TextField source="name" />
            <NumberField source="price" />
            <TextField source="type" />
            <TextField source="color" />
            <NumberField source="quantity" />
        </SimpleShowLayout>       
    </Show>
);

export const ItemsEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="name" />
            <NumberInput source="price" />
            <TextInput source="type" />
            <TextInput source="color" />
            <NumberInput source="quantity" />
        </SimpleForm>
    </Edit>
);
