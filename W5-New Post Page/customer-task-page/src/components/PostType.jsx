/* eslint-disable react/prop-types */
import { Form, Radio, Header } from "semantic-ui-react";

const PostType = ({ handleChange, isQuestion }) => {
  return (
    <Form>
      <Header as="h4">New Post</Header>
      <Form.Group inline>
        <Form.Field>
          <Radio
            label="Question"
            name="postType"
            value="Question"
            checked={isQuestion}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Article"
            name="postType"
            value="Article"
            checked={!isQuestion}
            onChange={handleChange}
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default PostType;
