import { useState } from "react";
import { Form, Container, Radio, Header } from "semantic-ui-react";
import PostArticle from "./PostArticle";
import PostQuestion from "./PostQuestion";

const PostType = () => {
  const [isQuestion, setIsQuestion] = useState(false);

  const handlePostType = (e, { value }) => {
    e.preventDefault();
    setIsQuestion(value === "Question");
  };

  return (
    <Container className="mt-[4rem] pt-10">
      <Form className="flex items-center justify-center gap-5">
        <Header as="h4" className="flex items-center justify-center mb-2">
          New Post:
        </Header>
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
      {isQuestion ? <PostQuestion /> : <PostArticle />}
    </Container>
  );
};

export default PostType;
