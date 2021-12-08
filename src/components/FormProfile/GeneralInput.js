import { FormGroups, FormGroup, Label, Input } from '../../styled-components/FormProfile-styled';

const GeneralInput = (props) => {
  const formField = [
    { key: '1', name: 'name', type: 'text', label: 'Nama Lengkap' },
    { key: '2', name: 'birthdate', type: 'date', label: 'Tanggal Lahir' },
    { key: '3', name: 'education', type: 'text', label: 'Pendidikan' },
    { key: '4', name: 'phone', type: 'number', label: 'Nomor HP' },
    { key: '5', name: 'git', type: 'text', label: 'Github' },
    { key: '6', name: 'insta', type: 'text', label: 'Instagram' },
    { key: '7', name: 'email', type: 'text', label: 'Email' },
    { key: '8', name: 'avatar', type: 'file', label: 'Upload Foto' },
  ];

  return (
    <FormGroups>
      {formField.map((field) => (
        <FormGroup key={field.key}>
          <Label>{field.label}</Label>
          <Input
            onChange={field.type === 'file' ? props.onUpload : props.onChange}
            type={field.type}
            name={field.name}
          />
        </FormGroup>
      ))}
    </FormGroups>
  );
};

export default GeneralInput;
