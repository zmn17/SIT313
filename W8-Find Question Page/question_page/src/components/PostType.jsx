import { useState } from "react";
import { Form, Container, Radio, Header } from "semantic-ui-react";
import Article from "./Article";
import Question from "./Question";

const PostType = () => {
  const [isQuestion, setIsQuestion] = useState(false);

  const handlePostType = (e, { value }) => {
    e.preventDefault();
    setIsQuestion(value == "Question");
  };

  return (
    <Container>
      <Form className="posttype-form">
        <Header as="h4">New Post</Header>
        <Form.Group inline>
          <Form.Field>
            <Radio
              label="Question"
              name="postType"
              value="Question"
              checked={isQuestion}
              onChange={handlePostType}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Article"
              name="postType"
              value="Article"
              checked={!isQuestion}
              onChange={handlePostType}
            />
          </Form.Field>
        </Form.Group>
      </Form>
      {isQuestion ? <Question /> : <Article />}
    </Container>
  );
};

export default PostType;
