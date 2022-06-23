import { Modal, useMantineTheme } from '@mantine/core';

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className='info_form'>
        <h3>Your info</h3>

        <div>
          <input type="text" className="info_input" name="FirstName" placeholder="First name" />
          <input type="text" className="info_input" name="LastName" placeholder="Last name" />
        </div>

        <div>
          <input type="text" className="info_input" name="WorksAt" placeholder="Works at" />
        </div>

        <div>
          <input type="text" className="info_input" name="LivesIn" placeholder="Lives in" />
          <input type="text" className="info_input" name="Country" placeholder="Country" />
        </div>

        <div>
          <input type="text" className="info_input" name="RelationshipStatus" placeholder="Relationship status" />
        </div>

        <div>
          Profile image
          <input type="file" name="ProfileImage" />
          Cover image
          <input type="file" name="CoverImage" />
        </div>

        <button className="button info_button">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal
