import React from 'react';
import classes from '../Lesson.module.css';

const Notes = () => {
  return (
    <div className={classes.notes_container}>
      <h3>Lesson Notes</h3>
      <h5>Lesson Focus</h5>
      <p>
        <b>{`The Focus of this Lesson is Self-introductions in Vietnamese \n\
Xin chào, tôi tên là An. \n\
Rất vui được gặp bạn.
"Hello. My name is An."
"Nice to meet you."`}</b>
      </p>
      <p
      >{`Xin chào" means "hello" or "hi." It is used as a greeting when you meet another person. It can be used to greet anyone, at any time of day and in both formal and informal situations. When someone says xin chào to you, simply reply with the same greeting. Xin chào.

After saying hello, introduce your name by saying tôi tên là +  your name.

Tôi means "I." Tên means "name" and là is the verb "to be." It can be literally translated as "I am named" but it is usual way Vietnamese people introduce their name.

Then say Rất vui được gặp bạn. - "Nice to meet you." When someone says to you Rất vui được gặp bạn, simply reply with Tôi cũng vậy, which means "Me too."

For example:

Xin chào, tôi tên là Jenny. Rất vui được gặp bạn.
"Hello, my name is Jenny. Nice to meet you."`}</p>
      <p><b>{`Examples from this dialogue:`}</b></p>
      <p>{`An: Xin chào, tôi tên là An.
Mary: Xin chào, tôi tên là Mary.
An: Rất vui được gặp bạn.
Mary: Tôi cũng vậy.

An: "Hello, my name is An."
Mary: "Hello, my name is Mary."
An: "Nice to meet you."
Mary: "Me too."`}</p>
      <p><b>{`Sample Sentences`}</b></p>
      <p>
        <i>{`
Xin chào, tôi tên là Lan. Rất vui được gặp bạn.
"Hello, my name is Lan. Nice to meet you."`}</i>
      </p>
      <h5><i>{`Key Vocabulary & Phrases`}</i></h5>
      <p
      >{`Tôi means "I or me." This is the first person pronoun which can be used in both formal and informal situations. But this is just the general equivalent of "I or me." Depending on gender, age and relationship, this equivalent also varies in different situations.

Bạn means "you." This is the general pronoun referring to the person directly talking with you at the moment of speaking. Like the pronoun tôi, bạn is just the general equivalent of "you." Depending on gender, age and relationship, this equivalent also varies in different situations.

Rất vui được gặp bạn literally means "I'm very happy to meet you" and can be understood as "Nice to meet you" in English. Vietnamese people also say Rất vui được làm quen với bạn which literally means "I'm happy to get acquainted with you" and this phrase is widely used when meeting someone for the first time in Vietnam.`}</p>
      <h5><i>{`Cultural Insights`}</i></h5>
      <p><b>{`Vietnamese Names`}</b></p>
      <p
      >{`A Vietnamese name usually consists of three parts: the family name comes first, then the middle name and the first name comes at the end. Vietnamese people often use first names to introduce themselves or address each other in both formal and informal situations. It's easy to see that in the dialogue, the first person introduces her name as An,
       which is her first name. Even though it is the first time they've met, it's common to use first names. To make it more formal, a pronoun or a title will be put first, followed by the full name. For example, Anh Nguyễn Văn Nam (Mr Nguyen Van Nam) or Giám đốc Nguyễn Văn Nam (Director Nguyen Van Nam). Depending on that person's gender, age, the pronoun will be different. Vietnamese people don't use family names to address each other like in Western culture.`}</p>
    </div>
  );
};

export default Notes;
